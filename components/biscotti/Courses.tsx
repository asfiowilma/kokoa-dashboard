import BiscottiIndicators from './Indicators'
import { ImSpinner } from 'react-icons/im'
import Link from 'next/link'
import { ROOT_URL } from 'services/constants'
import { SPECIALIZATION } from './Specializations'
import { getCoursesBySpecialization } from '@api/biscotti'
import toKebabCase from '@utils/toKebabCase'
import { useBiscotti } from '@hooks/useBiscotti'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const COURSE = 'course'

const Courses = () => {
  const { pathname, query } = useRouter()
  const { courses, activeSpecialization, setActiveCourse, setCourses } =
    useBiscotti()
  const { isLoading } = useQuery({
    queryKey: [
      COURSE,
      activeSpecialization?.id,
      `${activeSpecialization?.id}-courses`,
    ],
    queryFn: ({ queryKey }) =>
      getCoursesBySpecialization(queryKey[1] as number),
    enabled: !!query[SPECIALIZATION],
    onSuccess: (results) => {
      setCourses(results)
    },
  })

  const isActive = (param) => {
    return query[COURSE] == toKebabCase(param)
  }

  return isLoading ? (
    <div className="card shadow-lg bg-base-300 animate-pulse md:card-normal">
      <div className="card-body grid place-items-center">
        <ImSpinner className="animate-spin w-8 h-8" />
      </div>
    </div>
  ) : (
    <>
      <div className="md:hidden sticky top-10 w-full tabs tabs-boxed bg-base-100 -order-1">
        {courses.map((course, i) => (
          <Link
            key={course.id}
            href={{
              pathname,
              query: { ...query, course: toKebabCase(course.name) },
            }}
            prefix={ROOT_URL}
            onClick={() => setActiveCourse(course)}
            replace
            className={`tab ${isActive(course.name) ? 'tab-active' : ''}`}
          >
            Course {i + 1}
          </Link>
        ))}
      </div>

      <div className="card bg-base-100 shadow-lg overflow-auto scrollbar scrollbar-hidden hover:scrollbar-width-1 hover:scrollbar-track-transparent hover:scrollbar-thumb-stone-500 hover:scrollbar-track-radius-full md:max-h-[calc(100vh_-_11.5rem)]">
        <div className="card-body">
          <div className="card-title">{activeSpecialization.name}</div>

          <div className="flex flex-col gap-3">
            {courses.map((course, i) => (
              <Link
                key={course.id}
                href={{
                  pathname,
                  query: { ...query, course: toKebabCase(course.name) },
                }}
                prefix={ROOT_URL}
                onClick={() => setActiveCourse(course)}
                replace
                className={`group alert flex-col items-start md:gap-2 transition cursor-pointer ${
                  isActive(course.name)
                    ? 'bg-primary text-primary-content'
                    : 'hover:bg-neutral-focus'
                }`}
              >
                <div className="flex justify-between w-full">
                  <div className="uppercase text-sm font-bold">
                    Course {i + 1}
                  </div>
                  <div className="flex gap-2">
                    <BiscottiIndicators
                      isActive={isActive(course.name)}
                      course={course}
                    />
                  </div>
                </div>
                <p className="text-left">{course.name}</p>
                <progress
                  className={`transition progress  ${
                    isActive(course.name)
                      ? 'progress-accent'
                      : 'bg-base-300 progress-primary group-hover:bg-neutral'
                  }`}
                  value={
                    course.task_counts.completed /
                    (course.task_counts.total || 1)
                  }
                ></progress>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses
