"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

import CustomInput from "../../components/common/CustomInput";
import CustomSelect from "../../components/common/CustomSelect";
// import CustomCheckBox from "@/components/hire-remotely/CustomCheckBox";
// import CustomTextArea from "@/components/common/CustomTextArea";
// import CustomSelectMultiple from "@/components/common/CustomSelectMultiple";
import RichTextEditor from "../../components/rich-text-editor/RichTextEditor";

import {
  benefitsList,
  jobTypeList,
  primaryTagList,
} from "../../utilities/constants";

const WorkDescription = () => {
  return (
    <div className="text-[#bfbfbf]">
      <header>
        <nav className="p-4 flex justify-between items-center  border-color-bg-hover border-solid">
          <Link href="/" className="hover:opacity-80 user-select-none block">
            <span className="ps-1 pe-2 text-4xl">kollab</span>
            <span className="px-1 text-[28px] font-extrabold border-s-4 border-[#bfbfbf] leading-5">
              ship
            </span>
            <span className="text-xs ms-1">®</span>
          </Link>
          <Link
            href="/"
            className="hover:opacity-80 user-select-none hidden md:block px-1 text-3xl font-extrabold leading-5"
          >
            Post Requirement
          </Link>
        </nav>
      </header>

      <div className="flex w-full">
        <div className="flex-grow p-7 bg-white  pb-56">
          <div className="relative bg-color-bg p-7 -lg border border-gray-900 rounded-lg">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 rounded-tr-md rounded-tl-md top-0 -mt-2">
              let&apos;s start
            </div>

            <CustomInput
              id="company_name"
              placeholder="Company name"
              label="company name"
              mandatory={true}
            />

            <div className="text-xs text-[#888] mt-3 mb-4">
              Your company&apos;s brand/trade name: without Inc., Ltd., B.V.,
              Pte., etc.
            </div>

            <CustomInput
              id="position"
              placeholder="Position"
              label="position"
              mandatory={true}
            />

            <div className="text-xs text-[#888] my-1">
              Please specify as single job position like &quot;Marketing
              Manager&quot; or &quot;Node JS Developer&quot;, not a sentence
              like &quot;Looking for PM / Biz Dev / Manager&quot;. We know your
              job is important but please DO NOT WRITE IN FULL CAPS. If posting
              multiple roles, please create multiple job posts. A job post is
              limited to a single job. We only allow real jobs, absolutely no
              MLM-type courses &quot;learn how to work online&quot; please.
            </div>

            <CustomSelect id="job_type" list={jobTypeList} />

            <div className="mb-7"></div>

            <CustomSelect
              id="primary_tag"
              list={primaryTagList}
              label="primary tag"
            />

            <div className="text-xs text-[#888] mt-1 mb-4">
              This primary tag shows first and increases visibility in the main
              sections. Your job is shown on every page that is tagged with
              though. E.g. if you tag it as PHP, it shows for Remote PHP Jobs
              etc.
            </div>

            <div className="text-xs text-[#888] mt-1">
              If you&apos;d only like to hire people from a specific location or
              timezone this remote job is restricted to (e.g. Europe, United
              States or Japan). If not restricted, please leave it as
              &quot;Worldwide&quot;. The less restricted this is, the more
              applicants you will get. Keeping it &quot;Worldwide&quot; is
              highly recommended as you&apos;ll have access to a worldwide pool
              of talent.{" "}
              <span className="font-extrabold">
                To promote fairness in remote work positions,{" "}
                <Link
                  className="underline"
                  href="https://twitter.com/levelsio/status/1394260973406457863"
                >
                  worldwide jobs are ranked higher.
                </Link>
              </span>
            </div>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              job details
            </div>

            <RichTextEditor label="job description" mandatory={true} />

            <CustomInput
              id="apply_email_address"
              label="apply email address"
              placeholder="Apply email address"
              mandatory={true}
            />
            <p className="text-xs opacity-60 mt-2">
              This email is public (!), the [ Apply ] button links to it if you
              do not specify an Apply URL above. We recommend using an Apply
              URL, instead of an Apply Email Address, because you might get a
              lot of spam/automated applicants by email.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full pt-7 px-7 pb-2 bg-color-bg border-t border-color-bg-hover border-solid">
        <button className="block p-6 text-2xl w-full font-extrabold rounded-md text-white hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear">
          Start hiring -- <span className="line-through">$644</span> $588
        </button>
      </div>
    </div>
  );
};

export default WorkDescription;
