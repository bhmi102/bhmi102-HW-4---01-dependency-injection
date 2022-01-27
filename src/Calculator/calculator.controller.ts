import { Controller, Get, Param, Query } from "@nestjs/common";
import { query } from "express";
import { CalculatorService } from "./Calculator.service";

//Calculator controller - handles calculator's routing 
//instead of the GET function handling the calculation, the calculator object, created in the constructor, is injected as a dependency
@Controller('Calculator')
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) {}


    @Get()
    test(): any{
        return 'now in calc';
    }

    @Get('ADD')
    add(@Query('num1') num1: number, @Query('num2') num2: number): number{
        
        return this.calculatorService.ADD(num1,num2);
    }
}