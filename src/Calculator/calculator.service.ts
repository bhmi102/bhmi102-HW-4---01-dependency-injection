import { Injectable } from "@nestjs/common";

//injectable class acts as a service to the Calculator controller
@Injectable()
export class CalculatorService {
    ADD(num1: number, num2: number): number {
        let ans = +num1 + +num2;
        return ans;
      }
}