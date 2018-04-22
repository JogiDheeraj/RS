import {MatPaginatorIntl} from '@angular/material';

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) {return `0 من ${length}`;}

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} من ${length}`;
}


export function TranslatePaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'عنصر في الصفحة:';
  paginatorIntl.nextPageLabel = 'الصفحة التالية';
  paginatorIntl.previousPageLabel = 'الصفحة السابقة';
  paginatorIntl.firstPageLabel = 'الصفحة الاولى';
  paginatorIntl.lastPageLabel = 'الصفحة الأخيرة';
  paginatorIntl.getRangeLabel = dutchRangeLabel;

  return paginatorIntl;
}