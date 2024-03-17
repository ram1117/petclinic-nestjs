import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class PrismaExceptionFilter extends BaseExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.code;

    console.error(`${exception.code} - ${exception.message}`);
    switch (statusCode) {
      case 'P2002':
        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: `${exception.meta.target[0]} already exists`,
        });

        break;
      case 'P2025':
        {
          response.status(HttpStatus.NOT_FOUND).json({
            statusCode: HttpStatus.CONFLICT,
            message: `${exception.message.replace(/\n/g, '')}`,
          });
        }
        break;
      case 'P2005':
        {
          response.status(HttpStatus.NOT_FOUND).json({
            statusCode: HttpStatus.CONFLICT,
            message: `${exception.message.replace(/\n/g, '')}`,
          });
        }
        break;
      default:
        super.catch(exception, host);
        break;
    }
  }
}
