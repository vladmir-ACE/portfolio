import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCard, ExperienceCardComponent } from '../../shared/components/experience-card/experience-card.component';

@Component({
  selector: 'vlad-landing-section-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  template: `
   <div class="w-full bg-black">

   <div class="text-center text-white text-medium md:text-large"> My <span class="font-bold">Experience</span> </div>


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
      title: "Software Engineer at Kernel",
      periode: "Jan 2025 - Present",
      iconClass: "text-[32px] text-white!",
      description: `Working on the development of a core HR (COR / EOR) platform within an Nx monorepo environment, ensuring scalable and well-structured frontend and backend applications. I build responsive and high-quality user interfaces with Angular, delivering pixel-perfect integrations of Figma designs while maintaining strong UX and accessibility standards. On the backend side, I develop robust REST APIs using NestJS and leverage Hasura to expose GraphQL services. I also implement and maintain integrations with multiple external services such as Firebase, Onflow, Evoliz, HubSpot, and Slack to support authentication, payroll, billing, CRM, and internal automation workflows. I collaborate closely with product managers, designers, and engineers to deliver secure, performant, and production-ready solutions aligned with business requirements.`
    },
    {
      icon: 'vlad:kernel',
      title: "Software Engineer at Kernel",
      periode: "Jan 2025 - Present",
      iconClass: "text-[32px] text-white!",
      description: `Working on the development of a core HR (COR / EOR) platform within an Nx monorepo environment, ensuring scalable and well-structured frontend and backend applications. I build responsive and high-quality user interfaces with Angular, delivering pixel-perfect integrations of Figma designs while maintaining strong UX and accessibility standards. On the backend side, I develop robust REST APIs using NestJS and leverage Hasura to expose GraphQL services. I also implement and maintain integrations with multiple external services such as Firebase, Onflow, Evoliz, HubSpot, and Slack to support authentication, payroll, billing, CRM, and internal automation workflows. I collaborate closely with product managers, designers, and engineers to deliver secure, performant, and production-ready solutions aligned with business requirements.`
    }

  ];

}
