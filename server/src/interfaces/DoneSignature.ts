import User from "../api/models/User";

interface Done {
  (err: Error, user?: User): Promise<void>;
  (err: Error, auth: boolean): void;
  (err: Error, id: number): void;
}
export default Done;
