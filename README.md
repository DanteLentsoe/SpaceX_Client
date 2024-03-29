# SpaceX_Client

# Live Demo 
https://spacex-reports.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository

```bash
git clone https://github.com/DanteLentsoe/SpaceX_Client.git
```

Enter the cloned repositories' directory

```bash
cd SpaceX_Client
```

Install the projects dependencies

```bash
yarn
```
```


Start the projects development server

```bash
yarn server
```

The project should now be available at http://localhost:3000

### Development

> This environment is deployed to automatically on every merge to the `develop` branch.


## Deployment

Deployments are handled by github pipelines, below is an overview of how the deployments work:

1. Dependencies are installed with `yarn`
2. Application is built `yarn build`

## Environment Variables

None are applicable

### Deployment Variables

None are applicable

## Built With

Details of the tech stack that has been used.

- [React](https://reactjs.org/) - Client Side Library
- [TypeScript](https://www.typescriptlang.org/) - JavaScript Complier
- [Charkra UI](https://chakra-ui.com/) - Component Library
- [BootStrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - CSS Library
- [Styled Components](https://styled-components.com/) - 
- [Apollo Client](https://www.apollographql.com/docs/react/) - State Management Library


## Services

No services in use


## Authors

- **Dante Lentsoe** <dllentsoe@gmail.com>


## Meta

| Version | Author                                   | Date       |
| ------- | ---------------------------------------- | ---------- |
| 0.0.1   | Dante Lentsoe <dllentsoe@gmail.com>      | 02/06/2021 |

<img src="/public/Screenshot 2021-05-28 at 14.23.17.png">
 
  </img>

