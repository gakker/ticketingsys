import { createLogger, transports, format } from 'winston';
// Create a Winston logger instance
const logger = createLogger({
    transports: [
      new transports.Console({
        format: format.combine(
          format.colorize(), // Add color to the console output
          format.simple()    // Simple log format
        ),
      }),
      // You can add other transports here, such as file or database transports
    ],
  });
  
  // Middleware function to log requests
  export function requestLogger(req, res, next) {
    const { method, url, ip, headers } = req;
    const userAgent = headers['user-agent'];
  
    logger.info(`${method} ${url} from ${ip} - User-Agent: ${userAgent}`);
  
    // Log response data after the request is handled
    res.on('finish', () => {
      const { statusCode, statusMessage } = res;
      logger.info(`Response: ${statusCode} ${statusMessage}`);
    });
  
    next(); // Continue to the next middleware or route handler
  }