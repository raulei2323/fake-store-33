import clsx from "clsx";

export default function PageSection({
  children,
  title,
  className,
  contentClassname,
}) {
  return (
    <section
      className={clsx("w-full p-4 flex justify-center items-center", className)}
    >
      {title && <h1 className='text-3xl text-center'>{title}</h1>}
      <div className={clsx("w-full max-w-screen-xl", contentClassname)}>
        {children}
      </div>
    </section>
  );
}
