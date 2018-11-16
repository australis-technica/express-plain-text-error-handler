import { ErrorRequestHandler } from "express";
import { debugModule } from "@australis/create-debug";
const debug = debugModule(module);
/** 
 * send error.message 
 */
export default (): ErrorRequestHandler => {
    /** */
    return (error: Error & { code?: number }, _req, res, next) => {
        debug(error);
        if (error) {
            res.statusMessage = error.message;
            return res.status(typeof error.code === "number" ? error.code : 500).end();
        }
        return next();
    }
};