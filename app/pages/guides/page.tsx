"use server";

import { auth } from "../../../auth";
import { Guides } from "components/guides/Guides";
import { Session } from "next-auth";
import { extendGuides, fetchModules } from "utils/guideUtils";
import { Module } from "types/guideTypes";
import { getGuides } from "serverActions/getGuides";

const GuidesPage = async () => {
  const session: Session | null = await auth();
  if (!session?.user?.id) return null;

  const fetchedGuides = (await getGuides(session.user.id)) || [];
  if (fetchedGuides.length < 1) throw new Error("No guides found");

  const extendedGuides = await extendGuides(
    JSON.parse(JSON.stringify(fetchedGuides))
  );

  if (extendedGuides.length < 1) throw new Error("No extended guides found");

  const modules: Module[] = await fetchModules(extendedGuides);

  const moduleProgress = modules.map((module) => {
    const moduleGuides = extendedGuides.filter(
      (guide) => guide.module.title === module.title
    );

    const passedGuides = moduleGuides.filter(
      (guide) => guide.returnStatus === "Pass"
    ).length;

    const totalGuides = moduleGuides.length;
    const progress = totalGuides > 0 ? (passedGuides / totalGuides) * 100 : 0;

    return { moduleTitle: module.title, progress };
  });

  return (
    <Guides
      extendedGuides={extendedGuides}
      modules={modules}
      progressData={moduleProgress}
    />
  );
};

export default GuidesPage;
