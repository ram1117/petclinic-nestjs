import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('invoices')
export class InvoicesController {
  @Get(':appointmentId')
  getInvoice(@Param('appointmentId') appointmentId: string) {
    return `invoice for appointment Id ${appointmentId}`;
  }

  @Post()
  createInvoice() {
    return `invoice created`;
  }
}
