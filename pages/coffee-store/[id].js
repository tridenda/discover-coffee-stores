import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Coffee Store Page: {id} <Link href="/">Back to home</Link>
    </div>
  );
};

export default CoffeeStore;
