import { Controller, Get, Post, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}

  @Get(':appointmentId')
  getInvoice(@Param('appointmentId') appointmentId: string) {
    return `invoice for appointment Id ${appointmentId}`;
  }

  @Post()
  createInvoice() {
    return `invoice created`;
  }
}
