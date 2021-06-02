import { gql } from "@apollo/client";

export const LAUNCHES_SCHEMA = gql`
  query {
    launches {
      flight_number
      mission_name
      upcoming
      launch_year
      launch_date_unix
      launch_date_utc
      launch_success
      launch_date_local
      is_tentative
      tentative_max_precision
      tbd
      launch_window
      details
    }
  }
`;
