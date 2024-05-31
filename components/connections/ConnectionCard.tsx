import { Button } from '../ui/button'

export const ConnectionCards = ({
  title,
  icon,
  cardKey,
  handleConnection
}: {
  title: string
  icon: any
  cardKey: string
  handleConnection: any
}) => {
  return (
    <Button
      variant="outline"
      className="h-[65px] w-[200px]"
      onClick={() => handleConnection(cardKey)}
    >
      {icon}
      <span className="ml-1">{title}</span>
    </Button>
  )
}
