import socketLoader from "./socket";
import { Server } from "http";

const Loader = ({ server }: any): void => {
  socketLoader(server);
};

export default Loader;
