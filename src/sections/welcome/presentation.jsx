import { PresentationAnimation } from "./presentation-animation"
import { PresentationContent } from "./presentation-content"

export const Presentation = () => {
    return <div class="presentation">
        <PresentationContent />
        <PresentationAnimation />
    </div>
}