interface BiscottiIndicatorsProps {
  course?: BiscottiCourse
  specialization?: BiscottiSpecialization
  isActive: boolean
}

const BiscottiIndicators = ({
  course,
  specialization,
  isActive,
}: BiscottiIndicatorsProps) => {
  const data = specialization ?? course
  const count = specialization?.course_count ?? course?.module_count ?? 1

  const getProgress = () => {
    const { task_counts } = data
    const { total, completed } = task_counts
    console.log(
      '🚀 ~ file: Indicators.tsx:18 ~ getProgress ~ task_counts:',
      task_counts
    )
    Math.floor(((completed / (total || 1)) * 100) / count)
    console.log(
      '🚀 ~ file: Indicators.tsx:23 ~ getProgress ~ Math.floor(((completed / (total || 1)) * 100) / count):',
      Math.floor((completed / (total || 1)) * count)
    )

    return Math.floor((completed / (total || 1)) * count)
  }

  return (
    <>
      {Array.from({
        length: getProgress(),
      }).map((_, i) => (
        <div
          key={i}
          className={`badge ${
            isActive
              ? 'bg-neutral-content border-neutral-content'
              : 'badge-primary'
          }`}
        ></div>
      ))}
      {getProgress() != count ? (
        <div className="badge badge-accent"></div>
      ) : null}
      {Array.from({
        length: count - 1 - getProgress(),
      }).map((_, i) => (
        <div key={i} className="badge badge-outline"></div>
      ))}
    </>
  )
}

export default BiscottiIndicators
