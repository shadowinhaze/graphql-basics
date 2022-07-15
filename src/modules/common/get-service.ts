import fetch from 'cross-fetch';

export class GetService {
  private apiUrl = '';

  constructor(url: string) {
    this.apiUrl = url;
  }

  public async getAllItems<T>(_limit: number, _offset: number): Promise<T> {
    const limit = String(_limit) || '5';
    const offset = String(_offset) || '0';

    const response = await fetch(
      `${this.apiUrl}?${new URLSearchParams({ limit, offset })}`,
    );

    const result = await response.json();

    return result as T;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/explicit-function-return-type
  public renameKey<T>(arr: Array<T>, oldKey: string, newKey: string) {
    return arr.map((item: any) => ({
      ...item,
      [newKey]: item[oldKey],
    }));
  }

  public async getItemById<T>(id: string): Promise<T> {
    const response = await fetch(`${this.apiUrl}/${id}`);

    const foundBand = await response.json();

    return foundBand as T;
  }
}
