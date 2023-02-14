import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDataService } from './service/product-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
@NgModule({
  declarations: [ProductItemComponent],
  imports: [CommonModule, ProductsRoutingModule,HttpClientModule,MaterialModule],
  providers: [ProductDataService],
})
export class ProductsModule {}
