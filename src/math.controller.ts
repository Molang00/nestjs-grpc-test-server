import { Body, Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class MathController {

  @MessagePattern({cmd: 'sum'})
  async accumulate(data: number[]): Promise<number> {
    console.log(data)
    return (data || []).reduce((a, b) => a + b);
  }

}