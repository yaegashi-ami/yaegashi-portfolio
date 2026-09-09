import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ExperienceYears from "@/components/ExperienceYears";
import { tools, taskApps, chatApps } from "@/data/site";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
      <Sidebar />

      <div className="flex w-full flex-col gap-6 bg-profile p-8 lg:h-full lg:overflow-y-auto lg:p-12">
        <div className="border-b border-ink/20 pb-1">
          <h3 className="text-sm font-semibold tracking-widest">▼Tools</h3>
        </div>

        <div className="grid h-fit grid-cols-1 gap-4 md:grid-cols-2">
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
                <h2 className="text-lg font-semibold tracking-wider">
                  {tool.name}
                </h2>
                <p className="text-xs leading-relaxed">{tool.description}</p>
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

        <div className="flex flex-col gap-2">
          <div className="border-b border-ink/20 pb-1">
            <h3 className="text-sm font-semibold tracking-widest">
              ▼タスク管理
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-b border-ink/20 pb-1">
            <h3 className="text-sm font-semibold tracking-widest">
              ▼チャットツール
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
        </div>
      </div>

      <footer className="flex items-end justify-between p-8 text-xs tracking-widest text-main lg:hidden">
        <h3 className="font-semibold leading-tight">
          AMI
          <br />
          YAEGASHI
        </h3>
        <p>PORTFORIO</p>
      </footer>
    </main>
  );
}
