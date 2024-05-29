import FrontPageMap from "../FrontPageMap";
// import { within, userEvent } from "@storybook/test";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router"; // storybook plugin to integrate react router

export default {
  title: "FrontPageMap",
  component: FrontPageMap,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "/" },
      location: {
        // enter searchParams to simulate a http://localhost:5173/?longitude=-87.25571145903918&latitude=14.065549509301533
        // this is so that we can test the map at a specific, repeatable location every time
        // if searchParams aren't given, the default is to randomly pick 1 of 3 coordinates
        searchParams: {
          // this centers honduras
          // so chosen because the developers' tileset includes two overlapping polygons in this location
          longitude: "-87.25571145903918",
          latitude: "14.065549509301533",
        },
      },
    }),
  },
};

export const Primary = {
  args: {
    navBarHeight: "6rem",
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   await (async () => {
  //     setTimeout(() => {
  //       userEvent.type(canvas.getByTestId("woot"), "HERE IS THE TEXT!!!!!");
  //     }, 15000);
  //   });
  // },
};

// export const ZoomedIn = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//   }
// }
