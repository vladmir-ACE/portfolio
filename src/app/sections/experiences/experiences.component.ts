import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCard, ExperienceCardComponent } from '../../shared/components/experience-card/experience-card.component';

@Component({
  selector: 'vlad-landing-section-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  template: `
   <div class="w-full bg-black">

   <div class="text-center text-white text-medium md:text-large" i18n> My <span class="font-bold">Experience</span> </div>


   <div class="mt-5 flex flex-col gap-4 p-5  justify-center">

       @for (exp of experienceCards ; track  $index) {
         <vlad-shared-ui-experience-card [params]="exp"/>
       }
      </div>
   </div>
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent {

  experienceCards: ExperienceCard[] = [
    {
      icon: 'vlad:kernel',
      title: $localize`Software Engineer at Kernel`,
      periode: "Jan 2025 - Present",
      iconClass: "text-[32px] ",
      description: $localize`Working on the development of a core HR (COR / EOR) platform within an Nx monorepo environment, ensuring scalable and well-structured frontend and backend applications. I build responsive and high-quality user interfaces with Angular, delivering pixel-perfect integrations of Figma designs while maintaining strong UX and accessibility standards. On the backend side, I develop robust REST APIs using NestJS and leverage Hasura to expose GraphQL services. I also implement and maintain integrations with multiple external services such as Firebase, Onflow, Evoliz, HubSpot, and Slack to support authentication, payroll, billing, CRM, and internal automation workflows. I collaborate closely with product managers, designers, and engineers to deliver secure, performant, and production-ready solutions aligned with business requirements.`
    },
    {
      icon: 'vlad:dmm',
      title: $localize`Software Engineer at Dreammore`,
      periode: "Aug 2024 - Jan2025",
      iconClass: "text-[32px]",
      description: $localize`Contributed to the development of a multi-category e-commerce web platform, focused on selling products across different verticals. I was mainly responsible for building and enhancing the frontend experience, ensuring a fully responsive and user-friendly interface across desktop and mobile devices. I worked closely with the backend team to integrate REST APIs, enabling features such as product listing, cart management, and order workflows. Throughout the project, I collaborated with designers and engineers to deliver clean, maintainable code and a smooth end-to-end user experience aligned with business goals.`
    },
   {
  image: 'assets/asn_logo.png',
  title: $localize`Freelance Web Developer`,
  periode: "April 2024 - June 2024",
  description: $localize`Designed and developed a responsive Angular-based website for the French non-profit organization ASN (Smile with Neurofibromatosis). The platform showcases the association’s mission, activities, and initiatives while raising public awareness about neurofibromatosis, a rare genetic disorder that remains largely unknown to the general public. The website also includes donation features to support affected individuals and help fund the association’s actions. Throughout the project, I focused on delivering an accessible, user-friendly experience and a modern interface that effectively communicates the organization’s message and encourages community engagement.`
},
{
  image: 'assets/agrovision.png',
  title: $localize`Freelance Web Developer`,
  periode: "April 2024 - June 2024",
  description: $localize`Designed and developed a WordPress-based website for Agrovision BE, an agricultural consulting firm specializing in agro-pastoral project support, rural development initiatives, and the training of agricultural and livestock technicians. The platform presents the company’s profile, services, and team structure, while also showcasing training programs delivered by the firm and publications such as books and educational resources. The website was built to ensure a clear, professional presentation of the organization’s activities, improve visibility, and facilitate access to its training and knowledge-sharing content.`
}

  ];

}
