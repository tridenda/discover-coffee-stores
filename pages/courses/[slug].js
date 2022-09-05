import { useRouter } from "next/router";

const Courses = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div>Welcome to {slug}</div>;
};

export default Courses;
