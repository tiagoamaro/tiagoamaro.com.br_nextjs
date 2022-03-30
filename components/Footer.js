export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="border-t border-gray-200 py-2 text-center text-xs font-light">
      © {year}. Built with NextJS. Hosted on Vercel.
    </div>
  )
}
