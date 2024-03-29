import { HeadingH3, ImageEl, Markdown } from "components/_elements"
import { Image1Fragment } from "types"
import { StyledOverlayCard } from "./styled-card"

interface Props {
    title: string
    image: Image1Fragment
    description: string
    href: string
}

export const OverlayCard: React.FC<Props> = ({
    title,
    image,
    description,
    href
}) => {

    return (
        <StyledOverlayCard href={href}>
            <ImageEl image={image} />
            <div><HeadingH3>{title}</HeadingH3>
                <Markdown>{description}</Markdown></div>
        </StyledOverlayCard>
    )

}
