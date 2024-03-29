import { useQuery, useQueryClient } from '@tanstack/react-query'

import BiscottiIndicators from './Indicators'
import { COURSE } from './Courses'
import { ImSpinner } from 'react-icons/im'
import Link from 'next/link'
import { ROOT_URL } from 'services/constants'
import React from 'react'
import { getAllSpecializations } from '@api/biscotti'
import toKebabCase from '@utils/toKebabCase'
import { useBiscotti } from '@hooks/useBiscotti'
import { useRouter } from 'next/router'

export const SPECIALIZATION = 'specialization'

const Specializations = () => {
  const { query } = useRouter()
  const { specializations, setSpecializations } = useBiscotti()
  const { isLoading } = useQuery({
    queryKey: ['specialization'],
    queryFn: getAllSpecializations,
    onSuccess: (results) => {
      setSpecializations(results)
    },
  })

  const isActive = (param) => {
    return query[SPECIALIZATION] == toKebabCase(param)
  }

  return isLoading ? (
    <div className="card shadow-lg bg-base-300 animate-pulse md:card-normal">
      <div className="card-body grid place-items-center">
        <ImSpinner className="animate-spin w-8 h-8" />
      </div>
    </div>
  ) : (
    <>
      <div className="md:hidden flex w-full gap-3 -order-2 overflow-auto scrollbar scrollbar-hidden sticky top-0">
        {specializations.map((sp) => (
          <SpecializationLink
            sp={sp}
            className={`btn btn-sm ${
              isActive(sp.name) ? 'btn-primary' : 'btn-accent'
            } `}
          >
            {sp.name}
          </SpecializationLink>
        ))}
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <div className="card-title">Specializations</div>
          <div className=" flex flex-col gap-3">
            {specializations.map((sp) => (
              <SpecializationLink
                sp={sp}
                className={`group alert flex-col md:gap-2 transition cursor-pointer ${
                  isActive(sp.name)
                    ? 'bg-primary text-primary-content'
                    : 'hover:bg-neutral-focus'
                }`}
              >
                <div className="flex justify-between w-full">
                  <div className="uppercase text-sm font-bold">{sp.name}</div>
                  <div className="flex gap-2 justify-end flex-wrap w-full">
                    <BiscottiIndicators
                      isActive={isActive(sp.name)}
                      specialization={sp}
                    />
                  </div>
                </div>
                <progress
                  className={` transition progress  ${
                    isActive(sp.name)
                      ? 'progress-accent'
                      : 'bg-base-300 progress-primary group-hover:bg-neutral'
                  }`}
                  value={sp.task_counts.completed / (sp.task_counts.total || 1)}
                ></progress>
              </SpecializationLink>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

interface SpecializationLinkProps {
  sp: BiscottiSpecialization
  children: React.ReactNode
  className?: string
}

const SpecializationLink = ({
  sp,
  className,
  children,
}: SpecializationLinkProps) => {
  const { pathname, query } = useRouter()
  const { setActiveSpecialization } = useBiscotti()

  return (
    <Link
      key={sp.id}
      href={{
        pathname: ROOT_URL + pathname,
        query: {
          ...query,
          specialization: toKebabCase(sp.name),
          course: undefined,
        },
      }}
      onClick={() => setActiveSpecialization(sp)}
      replace
      className={className}
    >
      {children}
    </Link>
  )
}

export default Specializations
