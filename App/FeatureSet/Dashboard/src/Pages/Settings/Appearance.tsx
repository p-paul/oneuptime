import ProjectUtil from "Common/UI/Utils/Project";
import PageComponentProps from "../PageComponentProps";
import FormFieldSchemaType from "Common/UI/Components/Forms/Types/FormFieldSchemaType";
import CardModelDetail from "Common/UI/Components/ModelDetail/CardModelDetail";
import FieldType from "Common/UI/Components/Types/FieldType";
import Navigation from "Common/UI/Utils/Navigation";
import Project from "Common/Models/DatabaseModels/Project";
import React, { Fragment, FunctionComponent, ReactElement } from "react";

const Appearance: FunctionComponent<PageComponentProps> = (): ReactElement => {
  return (
    <Fragment>
      <CardModelDetail
        name="Appearance"
        cardProps={{
          title: "Project Color",
          description:
            "Marks this project with a bar across the top of every page and a dot in the project picker, so it is obvious which one you are working in. Leave it empty to use the default set for this instance.",
        }}
        isEditable={true}
        editButtonText="Edit Project Color"
        formFields={[
          {
            field: {
              color: true,
            },
            title: "Project Color",
            fieldType: FormFieldSchemaType.Color,
            required: false,
            description:
              "Give each project its own color so you can tell at a glance which one you are working in.",
          },
        ]}
        onSaveSuccess={() => {
          /*
           * The colour is applied from the project record loaded at startup,
           * so a reload is what makes it visible everywhere rather than only
           * on this page.
           */
          Navigation.reload();
        }}
        modelDetailProps={{
          modelType: Project,
          id: "model-detail-project-appearance",
          fields: [
            {
              field: {
                color: true,
              },
              fieldType: FieldType.Color,
              title: "Project Color",
              placeholder: "Using the default set for this instance.",
            },
          ],
          modelId: ProjectUtil.getCurrentProjectId()!,
        }}
      />
    </Fragment>
  );
};

export default Appearance;
