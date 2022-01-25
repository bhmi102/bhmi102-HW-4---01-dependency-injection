import { Module } from '@nestjs/common';
import { CalculatorController } from './Calculator.controller';
import { CalculatorService } from './Calculator.service';

@Module({
  imports: [],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
