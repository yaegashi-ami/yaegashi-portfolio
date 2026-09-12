import Image from "next/image";
import ExperienceYears from "@/components/ExperienceYears";
import ContactCard from "@/components/ContactCard";
import SlashText from "@/components/SlashText";
import SubNav from "@/components/SubNav";
import { tools, taskApps, chatApps } from "@/data/site";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-[1000px] flex-1 flex-col gap-12 px-5 pb-12 pt-6">
      <SubNav />
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-[0.2rem] text-main">
          Profile
        </h2>
        <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-wider">八重樫 亜実</h1>
        <p className="text-sm leading-6">
          桑沢デザイン研究所卒。
          Adobe
          CCソフトを中心に、近年はFigmaを主に利用してデザイン制作に取り組んでいます。
          <br />
          WordPressのテーマ編集、軽微なコーディングなどの業務も行ってます。
        </p>
        <p className="max-w-2xl text-sm leading-6">
          趣味：ローグライクゲーム、麻雀、ソフビ集め、勘料理 <br />
          好きなもの：鰻、コーラ、お湯、タオルケット
        </p>
        </section>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="border-b border-ink/20 pb-3 text-m font-semibold tracking-widest">
          ▼Tools
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative grid h-fit grid-cols-[auto_1fr] gap-4 rounded-2xl bg-white p-4 shadow-[0_0_8px_rgba(0,0,0,0.05)]"
            >
              <span className="absolute right-4 top-4 flex w-5">
                <Image
                  src={tool.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </span>
              <Image
                src={tool.image}
                alt={tool.alt}
                width={64}
                height={64}
                className="h-16 w-16"
              />
              <div>
                <h3 className="text-lg font-semibold tracking-wider">
                  {tool.name}
                </h3>
                <p className="text-sm leading-6 whitespace-pre-line"><SlashText text={tool.description} /></p>
                <p className="text-xs text-muted">
                  {tool.experienceText ??
                    (tool.startDate ? (
                      <>
                        利用歴/
                        <ExperienceYears start={tool.startDate} />年
                      </>
                    ) : null)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="border-b border-ink/20 pb-3 text-sm font-semibold tracking-widest">
          ▼タスク管理
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {taskApps.map((app) => (
            <div
              key={app.name}
              className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-xl bg-white p-3 shadow-[0_0_8px_rgba(0,0,0,0.05)]"
            >
              <Image
                src={app.image}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-md"
              />
              <h3 className="text-sm font-semibold tracking-wider">
                {app.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="border-b border-ink/20 pb-3 text-sm font-semibold tracking-widest">
          ▼チャットツール
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {chatApps.map((app) => (
            <div
              key={app.name}
              className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-xl bg-white p-3 shadow-[0_0_8px_rgba(0,0,0,0.05)]"
            >
              <Image
                src={app.image}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-md"
              />
              <h3 className="text-sm font-semibold tracking-widest">
                {app.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <ContactCard />
    </main>
  );
}
