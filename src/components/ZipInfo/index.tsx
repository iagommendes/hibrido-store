import { Button } from "../Button";
import { ZipInfo } from "./style";

export const Zip = () => {
  return (
    <ZipInfo>
      <p>Zip</p>

      <div>
        <input type="number"></input>
        <a href="http://">I don't know my zipcode</a>
        <Button value={"calculate shipping"} disabled={true} />
      </div>

    </ZipInfo>
  );
};
