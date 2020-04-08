import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(value, searchText) {
        if (!value) { return; }
        if (searchText === '') {
            return value;
        }
        const tempData = [];
        value.map((t) => {
            if (t.note_text.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                tempData.push(t);
            }
        });
        return tempData;
    }
}
