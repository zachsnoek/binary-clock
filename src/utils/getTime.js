import { toBinary } from "./toBinary.js";

const options = { hour: "2-digit", minute: "2-digit", hour12: false };

const getTime = () => {
    const time = new Date().toLocaleTimeString("en-US", options);
    const [hour, minute] = time.split(":").map(toBinary);

    return [hour, minute];
};

export { getTime };
