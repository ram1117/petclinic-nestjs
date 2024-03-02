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
    if (statusCode && statusCode.match(/[P]/)) {
      response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: `${exception?.code} - ${exception.message}`,
      });
    } else {
      super.catch(exception, host);
    }
  }
}
