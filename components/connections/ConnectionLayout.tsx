export const ConnectionLayout = ({
  children,
  title
}: {
  children: any
  title?: string
}) => {
  return (
    <div className="show-csv h-[calc(100vh-60px)] flex items-center justify-center flex-col">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      <div className="max-w-[450px] mx-auto w-full">{children}</div>
    </div>
  )
}
