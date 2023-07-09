import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from 'src/data';

@Controller('api/v1/report/:type')
export class AppController {
  @Get('')
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }
  @Post('')
  createReport() {
    return 'Created';
  }
  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }
  @Put(':id')
  updateReport() {
    return 'Updated';
  }
  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}
