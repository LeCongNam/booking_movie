import clsx from "clsx";
import style from "./ButtonChoose.module.scss";

interface Button {
	content: string;
	handleClick: (id: any) => void;
	id: Number;
	idActive: Number;
	eventKey: any;
}

function ButtonChoose({ content, handleClick, id, idActive }: Button) {
	return (
		<button
			className={clsx(style.button_std, {
				[style.defaultActive]: id === idActive,
			})}
			onClick={() => {
				handleClick(id);
			}}
		>
			{content}
		</button>
	);
}

export default ButtonChoose;
