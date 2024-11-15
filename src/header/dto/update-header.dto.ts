import { PartialType } from '@nestjs/mapped-types';
import { CreateHeaderDto } from './create-header.dto';

export class UpdateHeaderDto {
    title?: string;  // Puede ser opcional para permitir actualizar solo algunos campos
    description?: string;
    image?: string;
  }
