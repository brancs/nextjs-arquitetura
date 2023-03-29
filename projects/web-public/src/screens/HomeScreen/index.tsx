import Text from "@alura/design-system/components/Text";
import { sum } from "@alura/utils/math/sum";

export default function HomeScreen() {
  return (
    <>
      <Text tag={"h1"}>Alura - Home Page 2</Text>
      <Text tag={"p"}> Alura {sum(2, 4)}</Text>
    </>
  );
}
