import { IsNotEmpty } from 'class-validator';

export class SaveMovieRequestDto {
    @IsNotEmpty({ message: 'Id obligatoire !' })
    id: string;
}