import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InvoicesService } from './invoices.service';

@Controller()
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('invoices')
  getInvoices(@Request() req) {
    return this.invoiceService.findAll(req.user.id);
  }
}
