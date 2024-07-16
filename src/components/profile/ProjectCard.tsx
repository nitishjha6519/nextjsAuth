"use client";

import { FunctionComponent, useState } from "react";
// import { AiFillGithub, AiFillProject } from "react-icons/ai";
// import { MdClose } from "react-icons/md";
// import { IProject } from "src/utilities/types";
import { useRouter } from "next/navigation";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: any;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const router = useRouter();
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => router.push("/feedback")}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>
    </div>
  );
};

export default ProjectCard;
