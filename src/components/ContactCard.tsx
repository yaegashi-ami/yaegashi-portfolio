import SocialIcons from "@/components/SocialIcons";

export default function ContactCard() {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border-[0.5px] border-main bg-white p-8">
      <p className="text-2xl font-bold tracking-wider text-main">CONTACT</p>
      <p className="text-sm leading-6 whitespace-pre-line">
        {`ご依頼・ご相談を受け付けています。
        DTP・Web・コーディング、WordPressなど、制作に関することはお気軽にご相談ください。
企業・個人を問わず、「ちょっと相談したい」という内容でも大歓迎です。InstagramのDMまたはメールよりご連絡ください。`}
      </p>
      <SocialIcons />
    </section>
  );
}
