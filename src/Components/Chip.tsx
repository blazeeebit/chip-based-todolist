interface IChip {
    label: string
    onDelete?(): void
}

const Chip = ({
    label,
    onDelete
}: IChip) => {
    return (
        <div className="px-10 py-3 text-xl rounded-lg text-white shadow-md relative bg-[#884dff]">
            <span className="text-white font-semibold absolute right-2 top-0 cursor-pointer" onClick={onDelete}>x</span>
            {label}
        </div>
    )
}

export default Chip