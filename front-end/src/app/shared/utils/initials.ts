export class Initials {
  public getInitials(name): string {
    if (name.split(' ').length > 1) {
      return name
        .split(' ')
        .map((name, index, array) => {
          if (index === 0 || index === array.length - 1) {
            if (name !== '') {
              return name[0];
            } else {
              return array[index - 1][0];
            }
          } else {
            return '';
          }
        })
        .join('')
        .toLocaleUpperCase();
    } else {
      return name.substring(0, 2).toLocaleUpperCase();
    }
  }
}
