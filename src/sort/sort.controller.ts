import { Controller, Get, Param } from '@nestjs/common';
import { SortModule } from './sort.module';
import { SortService } from './sort.service';

@Controller('sort')
export class SortController {
  constructor(private readonly SortService: SortService) {}

  @Get('/sort-int/:algoName')
  sortFile(@Param('algoName') algoName) {
      return this.SortService.sortInt(algoName);
      
  }

  @Get('/sort-float/:algoName')
  sortFloatFile(@Param('algoName') algoName){
      return this.SortService.sortFloat(algoName);
    }

  @Get('/sort-string/:algoName')
  sortStringFile(@Param('algoName') algoName){
      return this.SortService.sortString(algoName);
  }
}