<GameFile>
  <PropertyGroup Name="sc_comic2" Type="Scene" ID="1ce4716e-01fc-4b76-8bf3-26de6397682c" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="30" Speed="1.0000" ActivedAnimationName="main_anim">
        <Timeline ActionTag="30320945" Property="Position">
          <PointFrame FrameIndex="0" X="478.4066" Y="129.9999">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="478.4066" Y="129.9999">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="30320945" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="30320945" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="30320945" Property="Alpha">
          <IntFrame FrameIndex="0" Value="128">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="30" Value="204">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="main_anim" StartIndex="0" EndIndex="30">
          <RenderColor A="150" R="0" G="0" B="205" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Scene" Tag="10" ctype="GameNodeObjectData">
        <Size X="960.0000" Y="640.0000" />
        <Children>
          <AbstractNodeData Name="sp_left_char" ActionTag="1839689300" Tag="19" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="100.5240" RightMargin="490.4760" TopMargin="9.5320" BottomMargin="225.4680" ctype="SpriteObjectData">
            <Size X="369.0000" Y="405.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="285.0240" Y="427.9680" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.2969" Y="0.6687" />
            <PreSize X="0.3844" Y="0.6328" />
            <FileData Type="Normal" Path="visualcontent/comic_characters/char01.png" Plist="" />
            <BlendFunc Src="770" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="sp_right_char" ActionTag="-1946780260" Tag="20" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="500.4600" RightMargin="90.5400" TopMargin="9.5320" BottomMargin="225.4680" ctype="SpriteObjectData">
            <Size X="369.0000" Y="405.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="684.9600" Y="427.9680" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.7135" Y="0.6687" />
            <PreSize X="0.3844" Y="0.6328" />
            <FileData Type="Normal" Path="visualcontent/comic_characters/char02.png" Plist="" />
            <BlendFunc Src="770" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="sp_dialog" ActionTag="30320945" Alpha="204" Tag="18" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="46.4066" RightMargin="49.5934" TopMargin="397.0001" BottomMargin="16.9999" ctype="SpriteObjectData">
            <Size X="864.0000" Y="226.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="478.4066" Y="129.9999" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.4983" Y="0.2031" />
            <PreSize X="0.9000" Y="0.3531" />
            <FileData Type="Normal" Path="visualcontent/ui/dialogbox01.png" Plist="" />
            <BlendFunc Src="770" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="btn_skip" ActionTag="-651619571" Tag="22" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="854.4960" RightMargin="23.5200" TopMargin="374.9760" BottomMargin="195.0080" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="52" Scale9Height="48" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="81.9840" Y="70.0160" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="895.4880" Y="230.0160" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.9328" Y="0.3594" />
            <PreSize X="0.0854" Y="0.1094" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Normal" Path="visualcontent/ui/button4_disabled.png" Plist="" />
            <PressedFileData Type="Normal" Path="visualcontent/ui/button4_pressed.png" Plist="" />
            <NormalFileData Type="Normal" Path="visualcontent/ui/button4.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="btn_next" ActionTag="-659868142" Tag="23" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="854.4960" RightMargin="23.5200" TopMargin="563.9680" BottomMargin="6.0160" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="52" Scale9Height="48" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="81.9840" Y="70.0160" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="895.4880" Y="41.0240" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.9328" Y="0.0641" />
            <PreSize X="0.0854" Y="0.1094" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Normal" Path="visualcontent/ui/button5_disabled.png" Plist="" />
            <PressedFileData Type="Normal" Path="visualcontent/ui/button5_pressed.png" Plist="" />
            <NormalFileData Type="Normal" Path="visualcontent/ui/button5.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="btn_options" ActionTag="589363285" Tag="24" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="854.4960" RightMargin="23.5200" TopMargin="14.9760" BottomMargin="555.0080" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="52" Scale9Height="48" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="81.9840" Y="70.0160" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="895.4880" Y="590.0160" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.9328" Y="0.9219" />
            <PreSize X="0.0854" Y="0.1094" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Normal" Path="visualcontent/ui/button6_disabled.png" Plist="" />
            <PressedFileData Type="Normal" Path="visualcontent/ui/button6_pressed.png" Plist="" />
            <NormalFileData Type="Normal" Path="visualcontent/ui/button6.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="txt_dialog" ActionTag="583590970" Tag="27" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="94.9920" RightMargin="94.9920" TopMargin="432.0000" BottomMargin="48.0000" IsCustomSize="True" FontSize="20" LabelText="" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
            <Size X="770.0160" Y="160.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="480.0000" Y="128.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.2000" />
            <PreSize X="0.8021" Y="0.2500" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>