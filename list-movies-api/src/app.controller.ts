import { Controller, Get, Param, Query } from '@nestjs/common';
import { MovieService } from './app.service'
import IMovie from './app.interface';

@Controller('movies')
export class AppController {
  constructor(private readonly appService: MovieService) {}

  @Get()
  getMovies(@Query('search') search: string) {
    return this.appService.getMovies(search);
  }
  @Get(':id')
  getMovieById(@Param('id') id: string) : Promise<IMovie> {
    return this.appService.getMovieById(id)
  }
}
