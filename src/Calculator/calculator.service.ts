import { Injectable } from "@nestjs/common";

@Injectable()
export class CalculatorService {
    ADD(num1: number, num2: number): number {
        let ans = +num1 + +num2;
        return ans;
      }
}