import { likes } from "./database";

class Orm {
  private static _instance: Orm = new Orm();

  public find(id: string) {
    return likes.get(id);
  }

  public findAll() {
    return likes.values();
  }

  public upsert(id: string, count: number) {
    likes.set(id, count);
  }

  // Singleton
  public static getInstance() {
    return this._instance;
  }
}

export default Orm.getInstance();
