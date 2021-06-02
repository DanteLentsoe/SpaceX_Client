import React from "react";
import "../../App.css";
import Loader from "../../components/loader";
import Header from "../../components/header";
import ErrorMsgToast from "../../components/toasts/errorToasts";
import classNames from "classnames";
import Moment from "react-moment";
import {
  TextBoxContainer,
  TextHeader,
  TextSubtitle,
  ButtonContainer,
} from "./styles";
import { Box, useColorModeValue } from "@chakra-ui/react";
// import TextContainer from "../../components/textContainer";
import { useState, useEffect } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { LAUNCHES_SCHEMA } from "../../graphql/queries";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  const [launchData, setLaunchData] = useState<null | undefined | []>();
  const [showMore, setShowMore] = useState<Boolean>(false);

  // const handleShow = (event: any) => {
  //   console.log("Even target", event.target);
  // };

  //Color schemes
  //   const { toggleColorMode } = useColorMode();
  const ContainerBackground = useColorModeValue("white", "gray.800");

  const { loading, error, data, networkStatus } = useQuery(LAUNCHES_SCHEMA);

  useEffect(() => {
    if (data && data.launches) {
      setLaunchData(data.launches);
    }
  }, [data]);

  if (loading) {
    return (
      <>
        {" "}
        <Loader />
      </>
    );
  }

  if (error) {
    <>
      {" "}
      <ErrorMsgToast />;
    </>;
  }

  // server data fetch check
  if (networkStatus === NetworkStatus.refetch) {
    console.log("Refecting Data");
  } else {
    console.log("Data fetched");
  }
  console.log("Data", launchData);
  return (
    <div>
      <Header />

      <div style={{ marginTop: "120px" }}>
        <TextBoxContainer>
          <TextHeader>SpaceX Mission Status</TextHeader>
          <div className="my-3">
            <p>
              <span className="px-3 mr-2 bg-success" /> = Success
            </p>
            <p>
              <span className="px-3 mr-2 bg-danger" /> = Fail
            </p>
          </div>
          {launchData &&
            launchData?.map((item: any, index) => {
              return (
                <div key={index} style={{ marginTop: "50px" }}>
                  <Box
                    boxShadow="dark-lg"
                    p="6"
                    className="card card-body mb-3"
                    background={ContainerBackground}
                    maxW="600px"
                    _hover={{
                      boxShadow: "lg",
                    }}
                  >
                    <div className="row">
                      <div className="col-md-9">
                        <TextHeader>
                          Mission Name:{" "}
                          <span
                            className={classNames({
                              "text-success": item.launch_success,
                              "text-danger": !item.launch_success,
                            })}
                          >
                            {item.mission_name}
                          </span>
                        </TextHeader>
                        <TextSubtitle>
                          {" "}
                          Date:{" "}
                          <Moment format="YYYY-MM-DD">
                            {item.launch_date_local}
                          </Moment>{" "}
                        </TextSubtitle>
                      </div>
                      <div className="col-md-3">
                        <ButtonContainer
                          onClick={(event: any) => {
                            setShowMore(!showMore);
                            // handleShow(event);
                          }}
                        >
                          Show More
                        </ButtonContainer>
                      </div>
                    </div>
                    <p className="col-md-9">
                      {showMore ? item.details : null}{" "}
                    </p>
                  </Box>
                </div>
              );
            })}
        </TextBoxContainer>
      </div>
    </div>
  );
};

export default HomePage;
